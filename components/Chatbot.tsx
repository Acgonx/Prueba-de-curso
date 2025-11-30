
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import type { GenerateContentResponse } from "@google/genai";
import type { ChatMessage } from '../types';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial',
      sender: 'bot',
      text: '¡Hola! Soy tu asistente de IA. ¿Cómo puedo ayudarte a aprender hoy?',
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        chatRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: 'Eres un asistente de IA amable, paciente y servicial para un curso de tecnología dirigido a personas mayores. Explica los conceptos de forma sencilla, sin jerga técnica. Sé alentador y positivo. Tu objetivo es hacer que se sientan cómodos y seguros usando la tecnología.',
          },
        });
      } catch (error) {
        console.error("Error initializing Gemini:", error);
        setMessages(prev => [...prev, {id: 'error-init', sender: 'bot', text: 'Lo siento, no pude conectarme con mi cerebro. Por favor, verifica la configuración.'}]);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputMessage,
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
        if (!chatRef.current) {
            throw new Error("Chat not initialized");
        }
        
        const stream = await chatRef.current.sendMessageStream({ message: inputMessage });
        
        let botResponseText = '';
        const botMessageId = Date.now().toString() + '-bot';
        
        // Add a placeholder message for the bot
        setMessages(prev => [...prev, { id: botMessageId, sender: 'bot', text: '...' }]);

        for await (const chunk of stream) {
            const c = chunk as GenerateContentResponse;
            botResponseText += c.text;
            
            // Update the bot's message in the list
            setMessages(prev => prev.map(msg => 
                msg.id === botMessageId ? { ...msg, text: botResponseText + '...' } : msg
            ));
        }
        
        // Final update to remove the ellipsis
        setMessages(prev => prev.map(msg => 
            msg.id === botMessageId ? { ...msg, text: botResponseText } : msg
        ));

    } catch (error) {
        console.error("Error sending message:", error);
        setMessages(prev => [...prev, {id: 'error-send', sender: 'bot', text: 'Uups, algo salió mal. Por favor, intenta de nuevo.'}]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50"
        aria-label="Abrir chatbot"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-md h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-40 border border-gray-200 origin-bottom-right transition-all duration-300 ease-out transform scale-100 opacity-100">
          <header className="bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="text-xl font-bold">Asistente de IA</h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200" aria-label="Cerrar chatbot">
                <CloseIcon />
            </button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="flex flex-col space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-md lg:max-w-sm px-4 py-3 rounded-2xl text-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}>
                    <p style={{whiteSpace: "pre-wrap"}}>{message.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-none">
                    <div className="flex items-center space-x-2">
                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Escribe tu pregunta aquí..."
                className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                disabled={isLoading || !inputMessage.trim()}
                aria-label="Enviar mensaje"
              >
                <SendIcon />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;

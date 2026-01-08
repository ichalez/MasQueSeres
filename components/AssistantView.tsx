
import React, { useState, useRef, useEffect } from 'react';
import { askIntrospectionAssistant } from '../services/geminiService';

const AssistantView: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: 'Bienvenido a tu espacio de introspección. ¿Qué hay hoy en tu mente que te gustaría explorar con mayor profundidad?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await askIntrospectionAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-[70vh] flex flex-col">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-slate-900 mb-2 brand-font italic">Asistente de Introspección</h2>
        <p className="text-slate-500">Un espacio seguro para reflexionar apoyado por IA generativa.</p>
      </div>

      <div className="flex-1 bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 mb-8 overflow-y-auto max-h-[500px] shadow-inner" ref={scrollRef}>
        <div className="space-y-6">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-cyan-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-1">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
        <div className="relative flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu reflexión o pregunta aquí..."
            className="flex-1 px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors disabled:opacity-50"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssistantView;

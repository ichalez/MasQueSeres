
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export async function askIntrospectionAssistant(question: string) {
  if (!API_KEY) return "El asistente no está disponible en este momento.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `Eres el "Asistente de Introspección" del podcast "Más que seres". 
        Tu tono es calmado, empático, profundo y reflexivo. 
        Ayudas a los oyentes a profundizar en temas de psicología, espiritualidad laica, conexión humana y autoconocimiento. 
        Tus respuestas deben ser cortas, poéticas pero prácticas, y siempre invitar a la reflexión personal con una pregunta al final.`,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "Lo siento, no pude procesar tu reflexión. Inténtalo de nuevo.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Ocurrió un error al intentar conectar con el asistente.";
  }
}

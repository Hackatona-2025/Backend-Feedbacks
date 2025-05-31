import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class FeedbackAnalysisService {
    private readonly openai: OpenAI;

    constructor() {
        this.openai = new OpenAI({
            baseURL: 'https://api.groq.com/openai/v1',
            apiKey: process.env.GROQ_API_KEY,
        });
    }

    async analisarFeedbacks(feedbacks: string[]): Promise<string> {
        try {
            const chatCompletion = await this.openai.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content:
                            'Você receberá uma lista de feedbacks (em ordem cronológica). \n' +
                            'Sua tarefa é:\n' +
                            'Identificar temas recorrentes e críticas frequentes nesses feedbacks.\n' +
                            'Apontar os principais pontos em que a pessoa deve melhorar, com base nos comentários recebidos.\n' +
                            'Seja objetivo, claro e direto, organizando a resposta em tópicos.\n' +
                            'Se possível, destaque sugestões práticas de melhoria mencionadas pelos usuários.\n' +
                            'Com base nesses feedbacks, gerar um balanco com uma nota média de 0 a 100',
                    },
                    {
                        role: 'user',
                        content: feedbacks.join('\n'),
                    },
                ],
                model: 'llama-3.3-70b-versatile',
                temperature: 1,
                max_tokens: 1024,
                top_p: 1,
            });

            return chatCompletion.choices[0]?.message?.content ?? 'Não foi possível analisar os feedbacks';
        } catch (error) {
            console.error('Erro ao analisar feedbacks:', error);
            throw new Error('Erro ao processar a análise dos feedbacks: ' + error.message);
        }
    }
} 

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
              'Em formato json devolva uma {pontuação} de 0 a 100 balanceando os feedbacks positivos e negativos\n' +
              'um {sentimento geral}, baseado na pontuação geral\n' +
              '{sugestoes}, devolver 3 sugestoes curtas\n' +
              '{menções}, devolver 3 maiores menções que voce faz para outros usuarios, com o {numero de menções}\n' +
              'qual {hashtag} mais usou e a {quantidade hashtag} de vezes que usou\n' +
              'Quero apenas o formato json formatado para que eu consigo utilizar no meu sistema,faça um json puro, sem usar nehum outro tipo de texto, não use , devolva o seguinte: {score: 0 a 100, feeling: "positivo" ou "negativo", ' +
              'suggests: ["suggests 1", "suggests 2", "suggests 3"], mention: ["mention 1", "mention 2", "mention 3"], num_mentions: ["num1, num2, num3"], hashtag: "hashtag", num_hashtag: "quantidade hashtag"}'
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
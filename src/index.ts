import Fastify from 'fastify';

interface EvaluateRequest {
  flag: string;
  userId: string;
}

const flags: Record<string, boolean> = {
  'checkout-v2': true,
  'new-recommendations': false,
};

const app = Fastify({ logger: true });

app.post<{ Body: EvaluateRequest }>('/evaluate', async (request) => {
  const { flag, userId } = request.body;
  return { flag, userId, enabled: flags[flag] ?? false };
});

const start = async (): Promise<void> => {
  await app.listen({ port: 3002, host: '0.0.0.0' });
};

start().catch((err) => {
  app.log.error(err);
  process.exit(1);
});

export const config = {
  runtime: 'edge',
};

let fn = async (req: Request): Promise<Response> => {
  return new Response();
};

if (process.env.NODE_ENV === 'development') {
  fn = async (req: Request) => {
    const { createLobeChatPluginGateway } = await import('@lobehub/chat-plugins-gateway');
    return createLobeChatPluginGateway()(req);
  };
}

export default fn;

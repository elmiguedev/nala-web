import DevUtils from "@/utils/DevUtils";

export const GET = async (request: Request) => {

  const baseUrl = process.env.NALA_API_BASE_URL || "";
  const url = `${baseUrl}/health`;
  const response = await fetch(url);
  const data = await response.json();



  return new Response(JSON.stringify(data));
};
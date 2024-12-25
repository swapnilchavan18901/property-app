export const config = {
  platform: "com.sog_swap.reState",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();

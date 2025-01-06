import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
const supabaseUrl = "https://xgeeuunbtcccdgtrxsto.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZWV1dW5idGNjY2RndHJ4c3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1OTkyMDUsImV4cCI6MjA1MTE3NTIwNX0.s6hwB82yUVQ8MJJrC2KBO4Za_33JYg6u7EBhOlDarkE";
const supabase = createClient(supabaseUrl, supabaseKey, {
  global: {
    headers: async () => {
      const deviceId = await AsyncStorage.getItem("deviceId");
      return {
        device_id: deviceId || "",
      };
    },
  },
});
export default supabase;

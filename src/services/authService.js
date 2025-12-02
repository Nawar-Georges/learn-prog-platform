export async function login(email, password) {
  try {
    console.log("Logging in with:", email, password);
    // await axios.post('/api/login', { email, password });
  } catch (err) {
    console.error(err);
  }
}

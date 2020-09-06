import myAxios from 'utils/myAxios';

async function register(email, password) {
  try {
    const res = await myAxios.post('api/users', { email, password });
    if (res.status === 200) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

export default register;

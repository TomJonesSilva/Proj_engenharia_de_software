import axios from "axios";

const accessToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

async function getUserData(username) {
  const apiUrl = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar dados do usuário: " + error.message);
  }
}

async function postSignUp(user) {
  const apiUrl = `https://api.github.com/signup/${user}`;

  try {
    const response = await axios.post(apiUrl, user);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar dados do usuário: " + error.message);
  }
}

//carregar as mensagens de feed de uma mesa
async function getMessage(mesa) {
  const apiUrl = `https://api.github.com/getmessage/${mesa}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar dados do usuário: " + error.message);
  }
}

//carregar as mesas que um usuario participa
async function getMesaByUser(user) {
  const apiUrl = `https://api.github.com/getmesa/${user}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar dados do usuário: " + error.message);
  }
}

//carregar as mesas
async function getMesa() {
  const apiUrl = `https://api.github.com/getmesa`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar dados do usuário: " + error.message);
  }
}

function sendWhatsappAlert(mensage, number) {
  return null;
}

//Google conta
async function getContaGoogle(user) {
  const apiUrl = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`;
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
        Accept: "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar dados do usuário: " + error.message);
  }
}

export { getUserData, getContaGoogle };

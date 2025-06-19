// api/telegram.js
import axios from "axios";

const TELEGRAM_BOT_TOKEN = "7416246631:AAGqPpmcJuCTfAPSf_gfJpnUBCeYVcEHnJ0";

export default async (req, res) => {
  try {
    // Запрос к Telegram API для получения данных
    const response = await axios.get(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`
    );

    // Извлечение данных о пользователе из ответа
    const userData = response.data.result[0]?.message?.from;

    if (!userData) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    // Отправка данных о пользователе в ответе
    res.status(200).json(userData);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Ошибка при получении данных пользователя из Telegram API",
      });
  }
};

export default class Media {
  /**
   * Solicita permissão de audio do usuário e pegar os dados do microfone
   */
  async getAudio() {
    return navigator.mediaDevices.getUserMedia({
      audio: true,
    });
  }
}

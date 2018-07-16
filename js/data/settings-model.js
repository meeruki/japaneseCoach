class SettingsModel {
  constructor(data, playerName) {
    this.data = data;
    this.playerName = playerName;
  }

  get name() {
    return this.playerName;
  }

  get sets() {
    return this.data;
  }


}

export default SettingsModel;

const app = Vue.createApp({
  data() {
    return {
      monsterHealthValue: 100,
      playerHealthValue: 100,
      playerManaValue: 0,
      monsterHealthBarColor: "bg-success",
      playerHealthBarColor: "bg-success",
      playerLost: false,
      playerWin: false,
      playerDraw: false,
      battleLog: [],
    };
  },
  computed: {
    updatePlayerProgressColor() {
      if (this.playerHealthValue >= 50 && this.playerHealthValue <= 80) {
        this.playerHealthBarColor = "bg-warning";
      } else if (this.playerHealthValue > 0 && this.playerHealthValue < 50) {
        this.playerHealthBarColor = "bg-danger";
      } else if (this.playerHealthValue == 0) {
        this.playerHealthBarColor = "";
      }

      return this.playerHealthBarColor;
    },
    updateMonsterProgressColor() {
      if (this.monsterHealthValue >= 50 && this.monsterHealthValue <= 80) {
        this.monsterHealthBarColor = "bg-warning";
      } else if (this.monsterHealthValue > 0 && this.monsterHealthValue < 50) {
        this.monsterHealthBarColor = "bg-danger";
      } else if (this.monsterHealthValue == 0) {
        this.monsterHealthBarColor = "";
      }

      return this.monsterHealthBarColor;
    },
    updateGameProgress() {
      if (this.monsterHealthValue <= 0 && this.playerHealthValue > 0) {
        this.playerWin = true;
      } else if (this.monsterHealthValue <= 0 && this.playerHealthValue <= 0) {
        this.playerDraw = true;
      } else if (this.playerHealthValue <= 0 && this.monsterHealthValue > 0) {
        this.playerWin = false;
        this.playerLost = true;
      }
    },
  },
  methods: {
    resetGame() {
      this.monsterHealthValue = 100;
      this.playerHealthValue = 100;
      this.monsterHealthBarColor = "bg-success";
      this.playerHealthBarColor = "bg-success";
      this.playerLost = false;
      this.playerManaValue = 0;
      this.battleLog = [];
    },

    playerHeal() {
      if (this.playerHealthValue !== 100) {
        if (this.monsterHealthValue > 0) {
          this.monsterAttack();
        }
        let healValue = Math.floor(Math.random() * 11);

        if (this.playerHealthValue + healValue > 100) {
          this.playerHealthValue = 100;
          this.battleLog.push(`Player Heals ${this.playerHealthValue + healValue - 100} HP`);
        } else {
          this.playerHealthValue += healValue;
          this.battleLog.push(`Player Heals ${healValue} HP`);
        }
      }
    },

    playerSurrender() {
      this.playerLost = true;
    },

    monsterAttack() {
      let monsterAttackValue = Math.floor(Math.random() * 21);
      if (this.playerHealthValue > 0) {
        this.playerHealthValue -= monsterAttackValue;
        this.battleLog.push(`Monster Attack Damage ${monsterAttackValue} HP to the Player`);
        if (this.playerHealthValue - monsterAttackValue <= 0) {
          this.playerHealthValue = 0;
          this.playerLost = true;
        }
      }
    },

    playerAttack() {
      let playerAttackValue = Math.floor(Math.random() * 21);
      this.monsterHealthValue -= playerAttackValue;
      this.playerManaValue += 10;
      this.battleLog.push(`Player Attack Damage ${playerAttackValue} HP to the Monster`);
      if (this.monsterHealthValue - playerAttackValue <= 0) {
        this.monsterHealthValue = 0;
        this.playerWin = true;
      }
      if (this.monsterHealthValue > 0) {
        this.monsterAttack();
      }
    },

    playerSpecialAttack() {
      let playerAttackValue = Math.floor(Math.random() * 51);
      this.monsterHealthValue -= playerAttackValue;
      this.playerManaValue -= 35;
      this.battleLog.push(`Player Special Attack Damage ${playerAttackValue} HP to the Monster`);
      if (this.monsterHealthValue - playerAttackValue <= 0) {
        this.monsterHealthValue = 0;
        this.playerWin = true;
      }
      if (this.monsterHealthValue > 0) {
        this.monsterAttack();
      }
    },
  },
});

app.mount("#app");

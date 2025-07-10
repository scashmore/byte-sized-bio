export default class TerminalUI {
  constructor(containerId) {
    this.container = document.getElementById(containerId);

    // Create output area
    this.outputArea = document.createElement("div");
    this.outputArea.style.whiteSpace = "pre-wrap";
    this.outputArea.style.fontFamily = "'Courier New', Courier, monospace";
    this.outputArea.style.color = "#33FF33";
    this.outputArea.style.padding = "10px";
    this.outputArea.style.height = "60vh";
    this.outputArea.style.overflowY = "auto";
    this.outputArea.style.backgroundColor = "#000";
    this.outputArea.style.border = "2px solid #33FF33";
    this.container.appendChild(this.outputArea);

    // Choice buttons container
    this.choiceContainer = document.createElement("div");
    this.choiceContainer.style.display = "flex";
    this.choiceContainer.style.flexDirection = "column";
    this.choiceContainer.style.padding = "10px";
    this.choiceContainer.style.gap = "8px";
    this.container.appendChild(this.choiceContainer);
  }

  print(text) {
    const line = document.createElement("div");
    line.textContent = text;
    this.outputArea.appendChild(line);
    this.outputArea.scrollTop = this.outputArea.scrollHeight;
  }

  async input(promptText = "") {
    if (promptText) {
      this.print(promptText);
    }

    return new Promise((resolve) => {
      // We expect choices to be shown immediately after this, so input is not typed
      // If you want a fallback or text input at some point, you can extend here.
      // For now, just wait for button click from displayChoices.
      this.resolveInput = resolve;
    });
  }

  displayChoices(choices, onSelect) {
    this.choiceContainer.innerHTML = "";

    choices.slice(0, 4).forEach((choice, i) => {
      const btn = document.createElement("button");
      btn.textContent = `${i + 1}. ${choice.text}`;
      btn.style.fontFamily = "'Courier New', Courier, monospace";
      btn.style.background = "#000";
      btn.style.color = "#33FF33";
      btn.style.border = "1px solid #33FF33";
      btn.style.padding = "0.75em";
      btn.style.fontSize = "1em";
      btn.style.textAlign = "left";
      btn.onclick = () => {
        onSelect(i);
        if (this.resolveInput) {
          this.resolveInput(i + 1);  // Resolve input as 1-based choice number
          this.resolveInput = null;
        }
      };
      this.choiceContainer.appendChild(btn);
    });
  }

  clearChoices() {
    this.choiceContainer.innerHTML = "";
  }
}
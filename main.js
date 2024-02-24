const text_font_size_slider = document.querySelector("#text-font-size");
const text_font_position_slider = document.querySelector("#text-font-position");
const message_font_size_slider = document.querySelector("#message-font-size");
const message_font_position_slider = document.querySelector("#message-font-position");

text_font_size_slider.addEventListener("input", (event) => {
  const tempSliderValue = Number(event.target.value);
  const progress = (tempSliderValue / 100) * 100;
  text_font_size_slider.setAttribute(
    "style",
    `background: linear-gradient(to right, #af192d ${progress}%, #d9d9d9 ${progress}%) !important`
  );
});

text_font_position_slider.addEventListener("input", (event) => {
  const tempSliderValue = Number(event.target.value);
  const progress = (tempSliderValue / 100) * 100;
  text_font_position_slider.setAttribute(
    "style",
    `background: linear-gradient(to right, #af192d ${progress}%, #d9d9d9 ${progress}%) !important`
  );
});

message_font_size_slider.addEventListener("input", (event) => {
  const tempSliderValue = Number(event.target.value);
  const progress = (tempSliderValue / 100) * 100;
  message_font_size_slider.setAttribute(
    "style",
    `background: linear-gradient(to right, #af192d ${progress}%, #d9d9d9 ${progress}%) !important`
  );
});

message_font_position_slider.addEventListener("input", (event) => {
  const tempSliderValue = Number(event.target.value);
  const progress = (tempSliderValue / 100) * 100;
  message_font_position_slider.setAttribute(
    "style",
    `background: linear-gradient(to right, #af192d ${progress}%, #d9d9d9 ${progress}%) !important`
  );
});

const textColorPicker = document.querySelector("#text-color-picker");
const textColorPickerButton = document.querySelector("#text-color-picker-button");

textColorPicker.addEventListener("input", (event) => {
  const color = event.target.value;
  // Handle logic for the color change
});

textColorPickerButton.addEventListener("click", () => {
  textColorPicker.click();
});

const messagecolorPicker = document.querySelector("#message-color-picker");
const messagecolorPickerButton = document.querySelector("#message-color-picker-button");

messagecolorPicker.addEventListener("input", (event) => {
  const color = event.target.value;
  // Handle logic for the color change
});

messagecolorPickerButton.addEventListener("click", () => {
  messagecolorPicker.click();
});

function lightCandle(type) {

  let message = "";
  let color = "";

  if (type === "Strength") {
    message = `
Mercy, you are stronger than you think.

Life can be heavy and painful, and sometimes it feels like everything is falling apart.
But even in those moments, you are still standing, and that alone is proof of your strength.

Take one step at a time. You don’t need to rush healing or force yourself to be okay.
You are allowed to cry, rest, and breathe.

Remember — storms do not last forever, and neither will this pain.
You are becoming stronger quietly, even when you don’t feel it.
    `;
    color = "#1e3a8a";
  }

  if (type === "Peace") {
    message = `
Mercy, may your heart slowly find peace again.

Peace does not mean life will never hurt — it means your heart learns how to live gently even after pain.
Let yourself rest from the weight of sadness.

You don’t always have to understand everything that happened.
Some answers will come with time, and some wounds will soften on their own.

Breathe deeply.
You are safe in this moment.
You are not alone in your feelings.
    `;
    color = "#0f766e";
  }

  if (type === "Healing") {
    message = `
Healing is a journey, Mercy — not a moment.

Some days you will feel okay, and some days everything will come back again.
That is normal. That is healing.

Do not rush yourself to “move on.”
Instead, learn how to move forward gently while carrying love in your heart.

Pain does not mean weakness.
It means you loved deeply, and that love mattered.

One day, this pain will not feel as sharp.
It will turn into memory, and memory will turn into strength.
    `;
    color = "#4c1d95";
  }

  if (type === "Marvin") {
    message = `
Mercy, Marvin Kizito is not gone from your life — he is just in a different place.

Love does not disappear when someone is no longer physically present.
It changes form and becomes memory, feeling, and presence in your heart.

Every time you miss him, that is love speaking.
Every tear, every smile, every memory — it all means he mattered deeply.

He is still part of your story, your strength, and your journey.
And nothing in this world can erase that bond.

Carry him not in sadness alone, but also in love and gratitude for the time you shared.
    `;
    color = "#7f1d1d";
  }

  // Animate message
  const output = document.getElementById("output");
  output.style.opacity = 0;

  setTimeout(() => {
    output.innerText = message;
    output.style.opacity = 1;
  }, 300);

  // Change background
  document.body.style.background = color;
}
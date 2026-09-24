const dialogueText = document.getElenentById("dialogueText");
const peaker = document.getElementById("speaker");
const continueButton = document.getElementById("continueButton");

const instruction = document.getElementById("instruction");
const desk05 = document.getElementById("desk05");

let dialogueIndex = 0;
let warnings = 0;
let canTrigger = true;

const dialogue = [
    {
        speaker: "MS. KURODA",
        text: "Good morning, everyone."
    },
    {
        speaker: "MS. KURODA",
        text: "I hope you all had a good weekend."
    },
    {
        speaker: "MS. KURODA",
        text: "Before we begin today's lesson, I have one reminder."
    },
    {
        speaker: "MS. KURODA",
        text: "Everyone is to remain in their assigned seat."
    },
    {
        speaker: "MS. KURODA",
        text: "Do not leave your desk during attendance."
    },
    {
        speaker: "MS. KURODA",
        text: "..Especially Student 05."
    }
];

continueButton.addEventListener("click", () => {
    dialogueIndex++;
    if (dialogueIndex < dialogue.length) {
        speaker.textContent = dialogue[dialogueIndex].speaker;
        dialogueText.textContent = dialogue[dialogueIndex].text;
    } else {
        speaker.textContent = "MS. KURODA";
        dialogueText.textContent = 
            "Now, let's take attendance.";
        continueButton.style.display = "none";
        instruction.textContent = 
            "KEEP YOUR CURSOR ON YOUR DESK.";
        startBeskInteraction();
    }
});

function startDeskInteraction() {
    desk05.addEventListener("mouseleave", () => {
        if (!cantrigger) return;
        canTrigger = false;
        warnings++;

        if (warnings === 1) {
            instruction.textContent =
                "MS. KURODA: Please return to your seat.";
        }
        else if (warnings === 2) {
            instruction.textContent =
                "MS. KURODA: I told you not to leave.";
            desk05.classList.add("occupied");
        }
        else {
            instruction.textContent =
                "MS. KURODA: ..Who is sitting in Desk 05?";

            desk05.textContent = "●";
        }
        setTimeout(() => {
            canTrigger = true;
        }, 1000);
    });
}
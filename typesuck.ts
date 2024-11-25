// Clock functionality
function updateClock(): void 
{
    const now: Date = new Date();
    let hours: number | string = now.getHours();
    let minutes: number | string = now.getMinutes();
    let seconds: number | string = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString: string = `${hours}:${minutes}:${seconds}`;
    const clockElement = document.getElementById("clock");

    if (clockElement) 
    {
        clockElement.innerHTML = timeString;
    }

    setTimeout(updateClock, 1000);
}

document.addEventListener("DOMContentLoaded", () => 
{
    updateClock();
});

// Tab switching functionality
const tablinks: HTMLCollectionOf<Element> = document.getElementsByClassName("tab-links");
const tabcontents: HTMLCollectionOf<Element> = document.getElementsByClassName("tab-contents");

function opentab(tabname: string): void 
{
    for (const tablink of Array.from(tablinks)) 
    {
        (tablink as HTMLElement).classList.remove("active-link");
    }
    for (const tabcontent of Array.from(tabcontents)) 
    {
        (tabcontent as HTMLElement).classList.remove("active-tab");
    }

    const eventTarget = event?.currentTarget as HTMLElement | null;
    if (eventTarget) 
    {
        eventTarget.classList.add("active-link");
    }

    const targetTab = document.getElementById(tabname);
    if (targetTab) 
    {
        targetTab.classList.add("active-tab");
    }
}

// Mobile view menu functionality
const sidemenu = document.getElementById("sidemenu");

function openmenu(): void 
{
    if (sidemenu) 
    {
        sidemenu.style.right = "0";
    }
}

function closemenu(): void 
{
    if (sidemenu) 
    {
        sidemenu.style.right = "-200px";
    }
}

// Form submission functionality
const scriptURL: string = 'https://script.google.com/macros/s/AKfycbysRcUIs3KUkABAFTqt1lVt2ESmcdD7RxQYz_6d2R9gsbRu-mxzbeNLylyIHhgkljh5OQ/exec';
const form: HTMLFormElement | null = document.forms['submit-to-google-sheet'];
const msg: HTMLElement | null = document.getElementById("msg");

if (form) {
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        if (msg) {
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message Submitted. Thank you!";
                    setTimeout(() => {
                        if (msg) msg.innerHTML = "";
                    }, 5000);
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message));
        }
    });
}

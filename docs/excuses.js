/** @format */

// no, I didn't type ALL of these by hand, I'm not that creative.

const excuses = [
	"wash my hair.",
	"allergic to the sun.",
	"feed my pet rock.",
	"allergic to the air.",
	"busy being happy.",
	"watch paint dry.",
	"count the blades of grass in my yard.",
	"the grass grow.",
	"be silly today, it's a full-time job.",
	"watch the clouds.",
	"the rain is too loud.",
	"watch the paint peel.",
	"eat my homework.",
	"eat cheese, it's a full-time job.",
	"do inorganic chemistry homework.",
	"busy being a potato.",
	"away on a secret mission.",
	"busy being a sea turtle.",
    "busy being a cat.",
    "busy washing the sky.",
    "busy being a tree.",
    "busy washing the air."
];

const excuse_prefix = ["I'm sorry, I can't make it because I", "I'm afraid"];

const e1 = "have to";
const e2 = "I am";

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getRandomExcuse() {
	const excuse = excuses[getRandomInt(excuses.length)];
    console.log(excuse);
	if (
		[
			"wash",
			"feed",
			"count",
			"watch",
			"be",
			"eat",
            "do",
		].includes(excuse.split(" ")[0])
	) {
        return `${excuse_prefix[0]} ${e1} ${excuse}`;
	} else {
        return `${excuse_prefix[1]} ${e2} ${excuse}`;
    }
}

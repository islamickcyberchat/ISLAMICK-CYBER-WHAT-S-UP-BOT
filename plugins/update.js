const fs = require('fs');
const { exec } = require('child_process');
const { cmd } = require('../command'); // Ensure `cmd` is defined properly in your project

cmd({
    pattern: "update",
    react: "🔄",
    desc: "Update folder from GitHub",
    category: "system",
    use: '.update',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const repoUrl = 'https://github.com/islamickcyberchat/ISLAMICK-CYBER-WHAT-S-UP-BOT.git'; // GitHub repository link
        const targetFolder = 'plugins'; // Folder to be updated

        // Check if the target folder exists
        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder, { recursive: true }); // Create the folder if it doesn't exist
        }

        // Determine the appropriate git command
        const gitCommand = fs.existsSync(`${targetFolder}/.git`)
            ? `git -C ${targetFolder} pull`
            : `git clone ${repoUrl} ${targetFolder}`;

        // Execute the git command
        const output = await new Promise((resolve, reject) => {
            exec(gitCommand, (err, stdout, stderr) => {
                if (err) {
                    reject(new Error(`Git command failed: ${stderr}`));
                } else {
                    resolve(stdout);
                }
            });
        });

        console.log(output); // Log output for debugging

        // Send success message
        await conn.sendMessage(
            from,
            { text: '*✅ SubZero Updated successfully!*' },
            { quoted: mek }
        );
    } catch (error) {
        console.error(error); // Log error for debugging
        reply(`*Error during update:* ${error.message}`);
    }
});

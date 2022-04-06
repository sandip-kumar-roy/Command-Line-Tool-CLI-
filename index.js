import figlet from "figlet";
import inquirer from "inquirer";
import gradient from "gradient-string";
let userName;


const greet = async () => {
    figlet('WELCOME TO Version -1  of C-L-I' ,function(err,data){
        console.log(data)
    });
    await new Promise(resolve =>setTimeout(resolve,2000));

    const {name} = await inquirer.prompt({
        type: "input",
        name:"name",
        message:"Enter your name ? "
    });

    userName = name;

    const msg = `Hello ${userName} !`;
    figlet(msg, (err,data) => {
        console.log(gradient.pastel.multiline(data));
    });

}

greet();
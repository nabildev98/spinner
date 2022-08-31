const string = "|/-\\|/-\\|";
let counter = 1000;
for (let char of string) {
  setTimeout(() => {
    process.stdout.write("\r" + char + "   ");
  }, (counter += 200));
}

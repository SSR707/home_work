function assertString(str:any): string | Error{
    if (typeof str == 'string'){
        return 'OK'
    }
    throw new Error()
}
try {
    assertString("hello");
    console.log("Input is a string");
  } catch (e) {
    console.error(e);
  }
  
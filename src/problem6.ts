type role =  `admin` | `editor`|  `viewer`
function getRoleMessage(r:role):string{
    return `Siz ${r} roli bilan kirdingiz`
}
console.log(getRoleMessage("admin")); 
console.log(getRoleMessage("viewer"));
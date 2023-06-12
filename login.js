class User{
    Constructor(name,pass)
    {
    this.username = name;
    this.password = pass;
    }
    validuser(name,pass)
    {
    return name = this.name && pass==this.password ? "Login Successful" : "Unauthorized access";
    }
}
    
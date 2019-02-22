class UserResolver {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  name () {
    return this.name
  }
}

module.exports = { UserResolver }

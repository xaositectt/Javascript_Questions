//will these two return the same thing?

function foo1()
{
  return {
      bar: "hello"
  }
}

function foo2()
{
  return
  {
      bar: "hello"
  }
}

//nope, foo1 returns {bar:'hello'}, foo2 returns undefined, because of the line break after return.

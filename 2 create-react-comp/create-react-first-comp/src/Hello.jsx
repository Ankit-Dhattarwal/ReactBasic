function Hello(){
/// Here learn how to use the dynamic compenent
  let myName = 'Ankit';
  let fullName = () => {
    return 'Ankit Dhattarwal'
  }

  return <p>
    Hello this side , {fullName()}
  </p>
}

export default Hello;
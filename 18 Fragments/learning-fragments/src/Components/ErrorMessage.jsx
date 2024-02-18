const ErrorMessage = ({ itemList }) => {
  return (
    <>
      {
        /* here is logical method use */ itemList.length === 0 && (
          <h3>I am still hungry.</h3>
        )
      }
    </>
  );
};

export default ErrorMessage;

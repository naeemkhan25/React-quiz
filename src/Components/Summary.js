export default function Summary() {
  return (
    <div class='summary'>
      <div class='point'>
        {/* <!-- progress bar will be placed here --> */}
        <p class='score'>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div class='badge'>
        <img src='./images/success.png' alt='Success' />
      </div>
    </div>
  );
}

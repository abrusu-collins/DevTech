function Process() {
  return (
    <div className="process">
      <p className="title">OUR PROCESS</p>
      <div className="processes">
        <div>
          <p className="numbered">01</p>
          <p className="process-title">Specification</p>
          <p>
            Send us a mail that contains exactly what you want. When you click
            on the "Talk To Us Now" button,
          </p>
        </div>
        <div className="back">
          <p className="numbered">02</p>
          <p className="process-title">Get a quote</p>
          <p>
            Receive the cost of the service.The cost varies and solely depends
            on what you want.
          </p>
        </div>
        <div className="back">
          <p className="numbered">03</p>
          <p className="process-title">Your Approval</p>
          <p>
            You then tell us that you've agreed/disagreed to pay the cost for us to
            proceed/terminate the process.
          </p>
        </div>
        <div>
          <p className="numbered">04</p>
          <p className="process-title">Work Starts</p>
          <p>
            Our team then starts working on the project as soon as possible.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;


export default function PageNotFound () {
  return (
      <section className="eblog-error-area tp-section-top-80">
        <div className="container">
          <div className="section-inner">
            <div className="row justify-content-center">
              <div className="col-lg-4 text-center">
                <div className="watermark">
                  <h2>404</h2>
                </div>
                <h2 className="heading-title text-center">Page not found!</h2>
                <p className="desc text-center">Sorry, the page you seems looking for, has been moved, redirected or removed permanently.</p>
                <a className="tp-btn btn-secondary" href="/">Go Back Home</a>
                <div className="error-bottom-text">
                  <p className="text-center">Why not try to search again? <a href="#">Search now</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

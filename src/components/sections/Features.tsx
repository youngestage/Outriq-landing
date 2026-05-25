import { featureBlocks, problemSection } from "@/lib/outriq-content";

export function Features() {
  const [block1, block2, block3, block4] = featureBlocks;

  return (
    <div id="features" className="block-feature-sixteen pt-130 lg-pt-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 m-auto">
            <div className="title-four text-center mb-80 lg-mb-40 pe-xl-3 ps-xl-3">
              <h2 className="fw-bold">{problemSection.headline}</h2>
              <p className="fs-22 mt-30">{problemSection.supporting}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {problemSection.cards.map((card, i) => (
            <div key={card.title} className="col-lg-4">
              <div className="card-style-seven position-relative text-center mt-30 pb-45 lg-pb-30">
                <img
                  src={`/images/icon_${28 + i}.svg`}
                  alt=""
                  className="icon m-auto"
                />
                <h4>{card.title}</h4>
                <p className="mt-15">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-120 lg-pt-50">
          <div className="row">
            <div className="col-lg-8 d-flex">
              <div
                className="feature-block block-one w-100 mt-30"
                style={{ background: block1.background }}
              >
                <h3 className="color-dark">{block1.title}</h3>
                <div className="row">
                  <div className="col-md-9">
                    <p className="fs-24 text-dark">{block1.body}</p>
                    <ul className="outriq-feature-labels">
                      {block1.labels.map((label) => (
                        <li key={label}>{label}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <img
                  src="/images/card_10.png"
                  alt=""
                  className="w-100 mt-70 md-mt-40"
                />
                <img
                  src="/images/shape_43.svg"
                  alt=""
                  className="shapes shape_01"
                />
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div
                className="feature-block block-one w-100 mt-30"
                style={{ background: block2.background }}
              >
                <h3 className="color-dark">{block2.title}</h3>
                <div className="row">
                  <div className="col-12">
                    <p className="fs-24 text-dark">{block2.body}</p>
                    <ul className="outriq-feature-labels">
                      {block2.labels.map((label) => (
                        <li key={label}>{label}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <img
                  src="/images/card_11.png"
                  alt=""
                  className="w-100 mt-40"
                />
                <img
                  src="/images/shape_44.svg"
                  alt=""
                  className="shapes shape_02"
                />
              </div>
            </div>
            <div className="col-12 d-flex">
              <div
                className="feature-block block-one w-100 mt-50 lg-mt-30 pe-0"
                style={{ background: block3.background }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="color-dark">{block3.title}</h3>
                    <div className="row">
                      <div className="col-xxl-10">
                        <p className="fs-24 text-dark">{block3.body}</p>
                      </div>
                    </div>
                    <ul className="style-none list-item mt-50">
                      {block3.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src="/images/card_12.png"
                      alt=""
                      className="ms-auto mt-20 md-mt-40 mb-60 md-mb-10"
                    />
                  </div>
                </div>
                <img
                  src="/images/shape_45.svg"
                  alt=""
                  className="shapes shape_03"
                />
              </div>
            </div>
            <div className="col-12 d-flex">
              <div
                className="feature-block block-one w-100 mt-50 lg-mt-30 outriq-draft-card"
                style={{ background: block4.background }}
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h3>{block4.title}</h3>
                    <p className="fs-24 mt-20">{block4.body}</p>
                    <ul className="outriq-feature-labels">
                      {block4.labels.map((label) => (
                        <li key={label}>{label}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src="/images/card_10.png"
                      alt=""
                      className="w-100 mt-20 md-mt-40 opacity-75"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

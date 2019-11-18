import React from "react";
import "../../../Styles/contentHome.scss";
import data from "../../../data/data.json";
import artikel from "../../../data/artikel.json";
import Disqus from "../../Disqus/Disqus";

const ContentHome = props => {
  return (
    <div className="container-fluid contentHome">
      <div className="row">
        <div className="col-md-9 col-sm-12 artikel">
          {artikel.artikel.map(content => (
            <div key={content.id}>
              <h1>{content.judul}</h1>
              <img src={content.img} alt="" />
              <article
                dangerouslySetInnerHTML={{ __html: props.markdown }}
              ></article>

              <i
                id="icon-list"
                onClick={props.showList}
                className={
                  props.stateShowList === "list"
                    ? "fas fa-chevron-circle-down"
                    : props.stateShowList === "show-list"
                    ? "fas fa-chevron-circle-up"
                    : ""
                }
              ></i>
              <Disqus />
            </div>
          ))}
        </div>
        {/* //NOTE list */}
        <div id={props.stateShowList} className="col-md-3 col-sm-3 list">
          <h1 id="header">
            <i className="fas fa-user-friends"></i> Profile
          </h1>
          <div className="box">
            {data.data.map(profil => (
              <div key={profil.id} className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={profil.img} className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{profil.nama}</h5>
                      <p className="card-text">{profil.tentang}</p>
                      <p className="card-text">
                        <small className="text-muted">{profil.divisi}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;

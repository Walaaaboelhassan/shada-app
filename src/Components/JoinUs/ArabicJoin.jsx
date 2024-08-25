import React from 'react'
import mount from "../../images/5881775159038296685.jpg";

function ArabicJoin() {
  return (
    <div className="join-us min-h-[100vh] flex justify-center items-center gap-4 ">
      <div className="image">
        <img src={mount} alt="mount" />
      </div>
      <div className="cover border-[12px] absolute"></div>
      <div className="info">
        <div className="title">
          <h1>انضم لنا</h1>
        </div>
        <div className="paragraph">
          <p>
            كن جزءًا من جمعية شدا للرياضات الجبلية وابدأ رحلة مغامرة عبر المناظر
            الطبيعية الخلابة لمنطقة الباحة. سواء كنت مبتدئًا تتطلع للاستكشاف أو
            متسلق جبال متمرس، فإن مجتمعنا يرحب بك لتجربة إثارة وجمال الرياضات
            الجبلية
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArabicJoin

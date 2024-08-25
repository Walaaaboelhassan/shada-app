import React from "react";
import "./AddmAss.css";
import "../Sections/About/About.css";
import member1 from "../../images/person1.jpg";
import member2 from "../../images/person2.jpg";
import member3 from "../../images/person3.jpg";
import member4 from "../../images/person4.jpg";
import member5 from "../../images/vecteezy_muslim-girl-in-black-hijab_36001923.jpg";
import SmallTitle from "../SmallTitle/SmallTitle";

function ArabicAddmAss() {
  return (
    <div className="addm-ass">
      <div className="members">
        <SmallTitle title={"أعضاء المجلس الإدارة"} />
        <div className=" mt-[70px] ">
          <div className="all-members">
            <div className="member flex-row-reverse">
              <div className="image !w-[100%] !h-[200px]">
                <img
                  src={member4}
                  alt="member"
                  className="w-[70%] mx-auto h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p> ناصر محمد علي الغامدي</p>
                <br />
                <span>بكلوريوس لغة عربية</span>
                <span>كاتب صحفي وباحث تاريخي</span>
                <span>
                  ناشط بيئي ومهتم بالزراعة العضوية وأمتلك مزرعة للقهوة ومختلف
                  اشجار الفاكهة
                </span>
                <span>مالك منتجع الكهوف السياحي سياحي </span>
              </p>
            </div>
            <div className="member flex-row-reverse">
              <div className="image !w-[100%] !h-[200px]">
                <img
                  src={member3}
                  alt="member"
                  className="w-[70%] mx-auto h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p> خالد الغامدي</p>
                <br />
                <span>بكلوريوس لغة عربية</span>
                <span>كاتب صحفي وباحث تاريخي</span>
                <span>ناشط بيئي في الزراعه العضوية و الجبليه</span>
                <span>مالك منتجع الكهوف السياحي الريفي </span>
                <span>عضو عدة لجان تنفيذيه في منطقة الباحه </span>
              </p>
            </div>
            <div className="member flex-row-reverse">
              <div className="image !w-[100%] !h-[200px]">
                <img
                  src={member2}
                  alt="member"
                  className="w-[70%] mx-auto h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p> عبدالعزيز محمد الياقوت</p>
                <br />
                <span>بكالوريوس علوم زراعية</span>
                <span>
                  {" "}
                  دورات قياديه عليا في الاداره التنفيذيه و الاستراتيجية المالية
                  من insead business school{" "}
                </span>
                <span>
                  خبره 18 عام في القطاع الخاص في السعودية و الامارات العربية
                  المتحده و مملكة البحرين
                </span>
                <span>عضو منتدب في شركة الاتحاد المستدام للتجاره </span>
                <span>
                  {" "}
                  رئيس مجلس الإداره في AY investment - عضو المكتب الأعمال
                  التنفيذي السعودي الأثيوبي{" "}
                </span>
              </p>
            </div>
            <div className="member flex-row-reverse">
              <div className="image !w-[100%] !h-[200px] bg-">
                <img
                  src={member5}
                  alt="member"
                  className="w-[70%] mx-auto h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p> الدكتوره / عزة الزهراني</p>
                <br />
                <span>
                  {" "}
                  المستوى التعليمي و جهه التخرج : البورد السعودي لامراض الجلدية
                  / البورد العربي للامراض الجلدية والتناسلية
                </span>
                <span>
                  {" "}
                  الخبره المهنيه : ١٢ سنة في مجال تخصص الامراض الجلدية{" "}
                </span>
                <span>
                  ناشط بيئي ومهتم بالزراعة العضوية وأمتلك مزرعة للقهوة ومختلف
                  اشجار الفاكهة
                </span>
                <span>
                  العمل الحالي : طبيبة استشارية للامراض الجلدية والتجميل{" "}
                </span>
              </p>
            </div>
            <div className="member flex-row-reverse">
              <div className="image !w-[100%] !h-[200px]">
                <img
                  src={member1}
                  alt="member"
                  className="w-[70%] mx-auto h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p> مطر حامد العمري</p>
                <br />
                <span> خبرة مصرفيه تتجاوز ٢٠ عام</span>
                <span> عضو مجلس ادارة نادي الحجاز</span>
                <span>عضوية مجلس الاستثمار الرياضي بغرفه الباحه</span>
                <span>مدرب كرة قدم محترف من الاتحاد الآسيوي </span>
                <span>
                  عدد كبير من الدورات الماليه و القياديه في المجال المصرفي{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicAddmAss;

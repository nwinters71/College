function jsonTest() {
//  alert("jsonTesting");
  
  var data1 = {"sites":[
          {"id":"niche", "label":"Niche", "rootURL":"https://www.niche.com/colleges/", "subs":[{"Report Card":"/#report-card"}, {"About":"/#about"}, {"Rankings":"/rankings/"}, {"Admissions":"/admissions/"}, {"Cost":"/cost/"}, {"Academics":"/academics/"}]
          }]}

  }

function jsonColleges () {
  var colleges = [
        {
          id: 1,
          unitid: 166027,
          nickname: "Harvard",
          name: "Harvard Universiy",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/270px-Harvard_shield_wreath.svg.png",
          icon: "icon-harvard.ico",
          image: "image-harvard.jpg",
          address: "Massachusetts Hall<br />Cambridge MA 02138",
          phone: "(617) 495-1000"
        },
        {
          id: 2,
          unitid: 130794,
          nickname: "Yale",
          name: "Yale Universiy",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/225px-Yale_University_Shield_1.svg.png",
          icon: "icon-yale.ico",
          image: "image-yale.jpg",
          address: "Woodbridge Hall<br />New Haven CT 06520",
          phone: "(203) 432-4771"
        },
        {
          id: 3,
          unitid: 186131,
          nickname: "Princeton",
          name: "Princeton Universiy",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Princeton_shield.svg/210px-Princeton_shield.svg.png",
          icon: "icon-princeton.ico",
          image: "image-princeton.jpg",
          address: "1 Nassau Hall<br />Princeton NJ 08544-1019",
          phone: "(609) 258-3000"
        },
        {
          id: 4,
          unitid: 243744,
          nickname: "Stanford",
          name: "Stanford University",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Stanford_University_seal_2003.svg/270px-Stanford_University_seal_2003.svg.png",
          icon: "icon-stanford.ico",
          image: "image-stanford.jpg",
          address: "450 Serra Mall<br />Stanford CA 94305-2004",
          phone: "(650) 723-2300"
        },
        {
          id: 5,
          unitid: 166683,
          nickname: "Massachusetts Institute of Technology",
          name: "MIT",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/300px-MIT_Seal.svg.png",
          icon: "icon-mit.ico",
          image: "image-mit.jpeg",
          address: "77 Massachusetts Avenue<br />Cambridge MA 02139-4307",
          phone: "(617) 253-1000"
        },
        {
          id: 6,
          unitid: 110404,
          nickname: "Caliornia Institute of Technology",
          name: "CalTech",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/225px-Seal_of_the_California_Institute_of_Technology.svg.png",
          icon: "icon-caltech.ico",
          image: "image-caltech.jpg",
          address: "1200 E California Blvd<br />Pasadena CA 91125-0001",
          phone: "(626) 395-6811"
        },
      ]
    return colleges;
}

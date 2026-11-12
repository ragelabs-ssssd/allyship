import sharp from "sharp";
import fs from "fs";

// Master targets based on Anju Bobby George (Gold Standard):
// Target Top of Head Y: 97px
// Target Eyes Y: ~300px
// Target Chin Y: ~540px
// Target Face Length: ~443px
// Center X: 512px

const alignments = [
  {
    name: "Anju Bobby George",
    file: "public/testimonials/anju-bobby-george.jpg",
    // Anju is the gold standard baseline - no modification needed
    action: "keep"
  },
  {
    name: "Nilesh Kulkarni",
    source: "C:/Users/USER/.gemini/antigravity/brain/cc58c774-249f-4fdc-86bf-a605d78f3225/.user_uploaded/media_1794427804113_c06e6f8a.jpg",
    dest: "public/testimonials/nilesh-kulkarni.jpg",
    // In raw: top of head is at Y=122.
    // To place top of head at Y=97 (shift up 25px):
    // Crop left: 15, top: 25, width: 994, height: 994, then resize to 1024x1024.
    // 122 - 25 = 97 -> (97/994)*1024 = 100px! Eyes at 305px!
    crop: { left: 15, top: 25, width: 994, height: 994 }
  },
  {
    name: "Dr. P.B. Kotur",
    source: "C:/Users/USER/.gemini/antigravity/brain/cc58c774-249f-4fdc-86bf-a605d78f3225/.user_uploaded/media_1794426835191_b299aa15.jpg",
    dest: "public/testimonials/pb-kotur-v2.jpg",
    dest2: "public/testimonials/pb-kotur.jpg",
    // In raw: top of head Y=90, chin Y=530.
    // Perfect alignment with top=0, left=0, but let's ensure centered framing.
    crop: { left: 0, top: 0, width: 1024, height: 1024 }
  },
  {
    name: "Archana Grover",
    source: "C:/Users/USER/.gemini/antigravity/brain/cc58c774-249f-4fdc-86bf-a605d78f3225/.user_uploaded/media_1794426892708_2836826f.jpg",
    dest: "public/testimonials/archana-grover.jpg",
    // In raw: top of hair Y=127, eyes Y=340, chin Y=570.
    // To shift top of hair up from 127 to 97 (shift up 30px):
    // Crop top: 30, left: 15, width: 994, height: 994, resize to 1024.
    // 127 - 30 = 97 -> exactly 100px headroom! Eyes at 310px!
    crop: { left: 15, top: 30, width: 994, height: 994 }
  },
  {
    name: "Premanand J.",
    source: "C:/Users/USER/.gemini/antigravity/brain/cc58c774-249f-4fdc-86bf-a605d78f3225/.user_uploaded/media_1794426949087_347722cf.jpg",
    dest: "public/testimonials/premanand-j.jpg",
    // In raw: top of hair is already Y=100, eyes Y=300, chin Y=540.
    crop: { left: 0, top: 0, width: 1024, height: 1024 }
  },
  {
    name: "Arshad Ayub",
    source: "C:/Users/USER/.gemini/antigravity/brain/cc58c774-249f-4fdc-86bf-a605d78f3225/.user_uploaded/media_1794428878481_bb1f63ae.jpg",
    dest: "public/testimonials/arshad-ayub-v2.jpg",
    dest2: "public/testimonials/arshad-ayub.jpg",
    // From our previous calculation:
    crop: { left: 106, top: 95, width: 798, height: 798 }
  },
  {
    name: "Gurbux Singh",
    source: "C:/Users/USER/.gemini/antigravity/brain/cc58c774-249f-4fdc-86bf-a605d78f3225/.user_uploaded/media_1794428344141_44f2575d.jpg",
    dest: "public/testimonials/gurbux-singh.jpg",
    // In raw: top of turban Y=109, eyes Y=330, chin Y=570.
    // To align eyes closer to 300px without clipping turban:
    // Crop top: 20, left: 10, width: 1004, height: 1004.
    crop: { left: 10, top: 20, width: 1004, height: 1004 }
  },
  {
    name: "Dr. G. Srinivas Patnaik",
    source: "C:/Users/USER/.gemini/antigravity/brain/cc58c774-249f-4fdc-86bf-a605d78f3225/.user_uploaded/media_1794426757226_ec4d7212.jpg",
    dest: "public/testimonials/srinivas-patnaik.jpg",
    dest2: "public/testimonials/srinivas-pattnaik.jpg",
    // In raw: top of hair Y=97, chin Y=510 (face length 413px).
    // To scale face length from 413px to ~443px (matching Anju's 443px):
    // Zoom factor = 443 / 413 = 1.072x.
    // Crop width/height = 1024 / 1.072 = 955px.
    // Center at x=512 -> left = 512 - 955/2 = 34.
    // Top of hair at 97 -> in crop: 97 / 1.072 = 90px below crop top -> top = 97 - 90 = 7.
    crop: { left: 34, top: 7, width: 955, height: 955 }
  }
];

async function alignAll() {
  console.log("Aligning all portraits to Anju Bobby George standards...");

  for (const item of alignments) {
    if (item.action === "keep") {
      console.log(`[PASS] ${item.name}: Gold Standard baseline preserved.`);
      continue;
    }

    const { left, top, width, height } = item.crop;
    const pipeline = sharp(item.source)
      .extract({ left, top, width, height })
      .resize(1024, 1024, { kernel: "lanczos3" })
      .sharpen({ sigma: 1.0, m1: 0.8, m2: 2.0 })
      .jpeg({ quality: 93, mozjpeg: true });

    await pipeline.toFile(item.dest);
    console.log(`[ALIGNED] ${item.name} -> ${item.dest}`);

    if (item.dest2) {
      fs.copyFileSync(item.dest, item.dest2);
      console.log(`[MIRRORED] -> ${item.dest2}`);
    }
  }

  console.log("All portraits aligned successfully!");
}

alignAll().catch(console.error);


const imageUploadUrl = `https://api.imgbb.com/1/upload?key=cfa6772fbbf4ef9f271b551f8738c063`;

async function uploadImageFetch(data) {
  const res = await fetch(imageUploadUrl, {
    
    method: "POST",
    body: data,
  });
  const imageData = await res.json();
  return imageData;
}

export default uploadImageFetch;

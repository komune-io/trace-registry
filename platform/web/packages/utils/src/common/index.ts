export const objToArray = <T>(obj: {
  [key: string]: T;
}): (T & {key: string })[] => {
  const array: (T & {key: string })[] = [];
  for (var key in obj) {
    array.push({ ...obj[key], key: key });
  }
  return array;
};

export const fileToBase64 = (file: File) =>
  new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
  });

export const Base64ToFile = (base64: string, fileName?: string): File => {
  var arr = base64.split(","),
    //@ts-ignore
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }

    return new File([u8arr], fileName ?? "", {type: mime });
};

export const BlobToFile = (blob: Blob, fileName?: string): File => {
  return new File([blob], fileName ?? "");
};

export const openBase64InNewWindow = (base64URL: string) => {
  var win = window.open();
    if (win) {
      win.document.write('<iframe src="' + base64URL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    win.document.body.style.margin = "0px"
  }
}

    export const formatNumber = (
    num?: number,
    isCurrency: boolean = false,
    language: string = "fr",
    fractionDigits: number = 2,
) => {
  if (num === undefined) return ''
  const fractions = fractionDigits > 0 ? Math.pow(10, fractionDigits) : 1;
    const fixedValue = Math.round(num * fractions) / fractions;
    return new Intl.NumberFormat(language, {
      style: isCurrency ? "currency" : "decimal",
    currency: "EUR",
    minimumFractionDigits: 0,
  }).format(fixedValue);
};

    export const distinct = <T>(
      array: T[],
  getKey: (item: T) => string | number = JSON.stringify
) => {
  const seen = new Set();

  return array.filter((item) => {
    const key = getKey(item);
      if (seen.has(key)) {
      return false;
    }
      seen.add(key);
      return true;
  });
};

export const getTotalPagesFromTotal = (total: number, size: number = 10) => Math.ceil((total) / size)

export const insertObjectIdsInsideRoutes = <Routes extends string = string>(route: Routes, ...objectIds: string[]) => {
  const splitted = route.split("/")
  let objectIdsIndex = 0

  return splitted.map((str) => {
      if (str.startsWith(":") && objectIds[objectIdsIndex]) {
        objectIdsIndex ++
        return objectIds[objectIdsIndex]
      }
      return str
  }).join("/")
}
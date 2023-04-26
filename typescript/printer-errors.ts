export function printerError(s: string): string {

    return s.replace(/[a-m]/g, '').length + '/' + s.length;

}
  console.log(printerError("kkkwwwaaaa"))
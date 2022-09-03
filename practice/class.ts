type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    // class를 타입으로 사용.
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  updateDef(term: string, def: string) {
    if (this.words[term] !== undefined) {
      this.words[term] = def;
    }
  }
  remove(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");
dict.add(new Word("bulgogi", "간장에 졸인 돼지고기"));
dict.updateDef("bulgogi", "간장양념에 졸인 돼지고기");
dict.remove("kimchi");

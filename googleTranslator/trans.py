from googletrans import Translator

translator = Translator()

sentence = input("번역할 문장을 입력해주세요: ")
dest = input("어떤 언어로 번역을 원하시나요: ")

# print(detected.lang)

result = translator.translate(sentence, dest)
detected = translator.detect(sentence)
print(detected.lang, ":", sentence)
print(result.dest, ":", result.text)

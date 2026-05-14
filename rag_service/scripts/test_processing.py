import json
from data_processing.json_loader import JSONLoader
from data_processing.data_cleaner import DataCleaner
from data_processing.metadata_adder import MetadataAdder


loader=JSONLoader("../backend/data")
raw_data=loader.load_all_files()
print("lenght of data:",len(raw_data))
print(json.dumps(raw_data[5], indent=2, ensure_ascii=False))  #print first raw of data
print(json.dumps(raw_data[6], indent=2, ensure_ascii=False))
#before cleaning data
print("================================data before cleaning====================================")
null_items = [i for i, item in enumerate(raw_data) if not item.get('name')]
print(f"Null items: {null_items}")

# Check duplicates by name
print("================================checking duplicate data====================================")
names = [item.get('name') for item in raw_data]
duplicates = [name for name in names if names.count(name) > 1]
print(f"Duplicate names: {set(duplicates)}")

# Check spaces
print("================================checking extra space ====================================")
space_issues = [item.get('name') for item in raw_data if item.get('name') != item.get('name', '').strip()]
print(f"Items with extra spaces: {space_issues}")

#for data cleaner file 
cleaner=DataCleaner()
cleaned_data=cleaner.clean_dataset(raw_data)
print("================================data after cleaning====================================")
print("length of data after cleaning and duplicate revoed:",len(cleaned_data))
print(json.dumps(cleaned_data[5], indent=2, ensure_ascii=False))  #print first raw of data
print(json.dumps(cleaned_data[6], indent=2, ensure_ascii=False))

null_items = [i for i, item in enumerate(cleaned_data) if not item.get('name')]
print(f"Null items: {null_items}")

# Check duplicates by name
print("================================checking duplicate data====================================")
names = [item.get('name') for item in cleaned_data]
duplicates = [name for name in names if names.count(name) > 1]
print(f"Duplicate names: {set(duplicates)}")

# Check spaces
print("================================checking extra space ====================================")
space_issues = [item.get('name') for item in cleaned_data if item.get('name') != item.get('name', '').strip()]
print(f"Items with extra spaces: {space_issues}")

# for metadata part

meta=MetadataAdder()
meta_added_data=meta.add_metadata(cleaned_data)
print(json.dumps(meta_added_data[5], indent=2, ensure_ascii=False))  #print first raw of data

#for text_chunker
from data_processing.text_chunker import TextChunker
chunker=TextChunker()
chunk_document=chunker.process_data(meta_added_data)

#print(chunk_data)
print(json.dumps(chunk_document[0], indent=2, ensure_ascii=False))  #print first raw of data
for item in chunk_document:
    print(item)
    print("\n")

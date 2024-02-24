<script setup lang="ts">
import BaseIcon from 'src/components/BaseIcon/index.vue'
import { ref } from 'vue';

interface FileItem {
  id: number;
  name: string;
  path: string;
  size: string;
  format: string;
}
const files = ref<FileItem[]>([
  { id: 1, name: '', path: '/files/farsudoc.docx', size: '', format: '' },
  { id: 2, name: '', path: '/files/farsuexcel.xls', size: '', format: '' },
  { id: 3, name: '', path: '/files/farsupow.pptx', size: '', format: '' },
]);

const downloadFile = (file: FileItem) => {
  console.log('Downloading', file.id);

  // Faylni yuklash logikasi

};

files.value.forEach(async file => {
  const response = await fetch(file.path);
  const blob = await response.blob();
  const sizeInBytes = blob.size;
  const sizeInKb = (sizeInBytes / 1024).toFixed(2);
  const sizeInMb = (parseFloat(sizeInKb) / 1024).toFixed(2);

  const format = file.path.split('.').pop()?.toUpperCase() || '';
  const fileName = file.path.split('/').pop()!;
  const fileformat = fileName.split('.').slice(0, -1).join('.');
  file.size = `${sizeInMb} MB`;
  file.format = format;
  file.name = fileformat
});
</script>
<template>
  <div class="container mx-auto lg:px-20 pt-9 pb-24">
    <div class="rounded-[20px] bg-white overflow-hidden p-6">
      <p
        class="text-emerald-600 text-opacity-95 text-[28px] font-extrabold leading-[25px] pb-5 border-b border-b-black border-opacity-20">
        Korxona faoliyati to’grisida xujjatlar</p>
      <table class="w-full border border-collapse mt-8">
        <thead>
          <tr>
            <th>№</th>
            <th>Xujjat nomi</th>
            <th>Xujjat formati</th>
            <th>Size</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(file, index) in files" :key="index">
            <td>{{ file.id }}.</td>
            <td>{{ file.name }}</td>
            <td>{{ file.format }}</td>
            <td>{{ file.size }}</td>
            <td class="text-center"><button @click="downloadFile(file)">
                <BaseIcon name="download" />
              </button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
th {
  @apply border py-[15px] px-10 border-gray-500 border-opacity-20 text-emerald-600 text-opacity-95 text-base font-extrabold leading-[25px] bg-gray-500 bg-opacity-10
}

td {
  @apply border py-[15px] px-10 border-gray-500 border-opacity-20 text-gray-500 text-sm font-medium leading-[25px]
}
</style>
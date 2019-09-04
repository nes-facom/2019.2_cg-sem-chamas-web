<template>
<div>
  oi
    <q-btn color="primary" label="Tirar foto" @click="captureImage" />
    <q-btn color="positive" icon="add_photo_alternate" label="Pegar do álbum" @click="captureImage('PHOTOLIBRARY')"  />


    </div>
</template>

<script>

document.addEventListener('deviceready', () => {}, false)

export default {
  data () {
    return {
      imageSrc: ''
    }
  },

  methods: {
    captureImage () {
      navigator.camera.getPicture(
        data => { // Sucesso
          this.imageSrc = `data:image/jpeg;base64, ${data}`
          alert(this.imageSrc)

        },
        () => { // Falha
          this.$q.notify('Não foi possível acessar a câmera do dispositivo.')
        },
        {
          // Opções da Camera
          quality: 50,
          destinationType: navigator.camera.DestinationType.DATA_URL,
          encodingType: navigator.camera.EncodingType.JPEG,
          MEDIATYPE: navigator.camera.MediaType.PICTURE,
          sourceType: navigator.camera.PictureSourceType.CAMERA,
          mediaType: navigator.camera.MediaType.PICTURE,
          cameraDirection: navigator.camera.Direction.BACK,
          targetWidth: 300,
          targetHeight: 400
        }
      )
    }
  }
}
</script>

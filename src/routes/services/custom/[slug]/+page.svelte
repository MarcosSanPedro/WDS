<!-- +page.svelte (or wherever you call it) -->
<script lang="ts">
	import DetailedService from '../../../../components/DetailedService.svelte';
	import { _services } from './+page'; // wherever your data comes from
  </script>
  
  <DetailedService {_services} />
  
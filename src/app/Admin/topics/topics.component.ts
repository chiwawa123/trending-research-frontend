import { Component, OnInit } from '@angular/core';
import { TopicCategoryService } from 'src/app/Services/topic-category.service';
import { TopicService } from 'src/app/Services/topic.service';
import { TopicModel } from 'src/app/topic-model.model';
import { ToastrService } from 'ngx-toastr';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent implements OnInit {
  topics: any;
  topicCategory: any;
  file: any;
  selected:any;
  target: any = '';
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  topicc = new TopicModel();

  formdata: any;
  data: any;
  category: any;
  items: any;

  constructor(
    private topicService: TopicService,
    private topicCategoryService: TopicCategoryService,
    private toastr: ToastrService
  ) {}
  GetTopicCategory() {
    return this.topicCategoryService.getTopicCategory().subscribe((res) => {
      this.topicCategory = res;
      // console.log(this.topicCategory);
    });
  }
  topicData() {
    return this.topicService.getTopics().subscribe((res) => {
      this.topics = res;
      var table=$('#topicTable').DataTable();
      table.destroy();
      this.dtTrigger.next(null);
      // console.log(this.topics);
    });
  }
  ngOnInit() {
    this.topicData();
    this.GetTopicCategory();
    this.topicc.topic_category_id = '';
    this.Category();
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      pageLength: 10,
      destroy:true
    };
  }

  insertTopic() {
    var formdata = new FormData();

    formdata.append('image', this.file, this.file.name);
    formdata.append('topic_name', this.topicc.topic_name);
    formdata.append('slider', this.topicc.slider);
    formdata.append('position', this.topicc.position);
    formdata.append('is_active', this.topicc.is_active);
    formdata.append('description', this.topicc.description);
    formdata.append('date_posted', this.topicc.date_posted);
    formdata.append('topic_category_id', this.topicc.topic_category_id);

    this.topicService.postTopic(formdata).subscribe((response: any) => {
      this.data = response;
      if (this.data.status == 200) {
        this.toastr.success(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut: 6000,
            progressBar: true,
          }
        );
      } else {
        this.toastr.error(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut: 6000,
            progressBar: true,
          }
        );
      }
      console.log(this.data);
      this.topicData();

      this.topicc.topic_name = '';
      this.topicc.slider = '';
      this.topicc.position = '';
      this.topicc.is_active = '';
      this.topicc.description = '';
      this.topicc.date_posted = '';
      this.topicc.topic_category_id = '';
    });
  }

  imageUpload(event: any) {
    this.file = event.target.files[0];
    // console.log(this.file);
  }

  deleteTopic(item: any) {
    this.formdata = item;
    this.topicService.removeTopic(this.formdata).subscribe((res) => {
      this.data = res;
      if(this.data.status ==200){
        this.toastr.success(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut:6000,
            progressBar:true,

          }
        );
      }else{
        this.toastr.error(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut:6000,
            progressBar:true
          }

        )
      }
      // console.log(res);
      this.topicData();
    });
  }

  Category() {
    this.topicCategoryService.getTopicCategory().subscribe((res) => {
      this.category = res;
      // console.log(this.category);
    });
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  setTopic(t:any){
    this.topicc = t;
  }

  topicUpdate(item:any) {
    var formdata = new FormData();

    formdata.append('image', this.file, this.file.name);
    formdata.append('topic_name', this.topicc.topic_name);
    formdata.append('slider', this.topicc.slider);
    formdata.append('position', this.topicc.position);
    formdata.append('topic_id', this.topicc.topic_id);
    formdata.append('is_active', this.topicc.is_active);
    formdata.append('description', this.topicc.description);
    formdata.append('date_posted', this.topicc.date_posted);
    formdata.append('topic_category_id', this.topicc.topic_category_id);

    this.topicService.updateTopic(formdata).subscribe((response: any) => {
      this.data = response;
      this.topicc = this.data;
      if (this.data.status == 200) {
        this.toastr.success(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut: 6000,
            progressBar: true,
          }
        );
      } else {
        this.toastr.error(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut: 6000,
            progressBar: true,
          }
        );
      }
      console.log(this.data);
      this.topicData();

      this.topicc.topic_name = '';
      this.topicc.slider = '';
      this.topicc.position = '';
      this.topicc.is_active = '';
      this.topicc.description = '';
      this.topicc.date_posted = '';
      this.topicc.topic_category_id = '';
    });
  }

  updateImage(event: any) {
    this.file = event.target.files[0];
    // console.log(this.file);
  }
}
